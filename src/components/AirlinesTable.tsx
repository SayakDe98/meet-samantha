import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface airline {
  country: string;
  established: string;
  head_quaters: string;
  logo: string;
  name: string;
  slogan: string;
  website: string;
  id: number;
  __v: number;
  _id: string;
}

interface createData {
  id: string,
  name: string,
  trips: number,
  airline : airline[]
}

const Row = (props: { row: any }) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        {/* <TableCell component="th" scope="row" align="left">
          {row.name}
        </TableCell> */}
        {/* <TableCell align="left">{row.name}</TableCell> */}
        <TableCell align="right">{row.trips}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Airline
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Established</TableCell>
                    <TableCell>Head Quarters</TableCell>
                    {/* <TableCell align="right">Logo</TableCell> */}
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="right">Slogan</TableCell>
                    <TableCell align="right">Website</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.airline.map((airlineRow: airline) => (
                    <TableRow key={airlineRow.id}>
                      <TableCell>{airlineRow.country}</TableCell>

                      <TableCell component="th" scope="row">
                        {airlineRow.established}
                      </TableCell>
                      <TableCell>{airlineRow.head_quaters}</TableCell>
                      {/* <TableCell align="right">{airlineRow.logo}</TableCell> */}
                      <TableCell align="right">{airlineRow.name}</TableCell>
                      <TableCell align="right">{airlineRow.slogan}</TableCell>
                      <TableCell align="right">{airlineRow.website}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export default function AirlinesTable(props: any) {
  console.log("ar",props)
  const { airlineRow, totalNumberOfRows } = props;
  const [page, setPage] = React.useState(0);
  const [size, setSize] = React.useState(5);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    console.log("page changed",page)
    setPage(newPage);
    props.handleChangePage(newPage);
  };
  
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
      console.log("Table rows", event.target.value)
      setSize(+event.target.value);
      setPage(0);
      props.handleChangeRowsPerPage(event.target.value);
    };

  return (
    <Paper
      sx={{
        overflow: "auto",
        width: "90%",
        m: "auto",
        // mt: "15rem",
        mt: "5rem",
        // mb: "15rem",
        mb: "5rem",
      }}
    >
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead sx={{ bgcolor: "#ee3e01" }}>
            <TableRow>
              {/* <TableCell /> */}
              {/* <TableCell align="left">Airline</TableCell> */}
              <TableCell align="left" sx={{ ml: "2rem", color: "white" }}>
                Name
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Trips
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airlineRow.map((row: airline) => (
              <Row key={row._id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          bgcolor: "#ee3e01",
          color: "white",
          ".css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
            color: "white !important",
          },
          // ".MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root":
          //   {
          //     color: "green",
          //   },
        }}
        nextIconButtonProps={{
          style: {
            color: "white",
          },
          // onMouseEnter: () => props.prefetchData()
        }}
        // backIconButtonProps={{
        //   style: {
        //     color: "white",
        //   },
        // }}
        // SelectProps={{
        //   style: {
        //     color: "white"
        //   },
        // IconComponent={}
        // }}
        showLastButton={false}
        showFirstButton={false}
        rowsPerPageOptions={[5, 10, 25, 100, 500, 1000]}
        component="div"
        // count={airlineRow.length}
        count={totalNumberOfRows}
        rowsPerPage={size}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
