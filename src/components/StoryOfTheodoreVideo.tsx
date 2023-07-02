import styles from "./StoryOfTheodoreVideo.module.css";

const StoryOfTheodoreVideo = () => {
  return (
    <iframe
    title="story-of-theodore"
    className={styles.video}
    src="https://www.youtube-nocookie.com/embed/ne6p6MfLBxc"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      // style={{height: 400, width:700}}
    ></iframe>
  );
}

export default StoryOfTheodoreVideo