export function Species({ name, language, averageLifespan }: ({ name: string, language: string, averageLifespan:string }) ) {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}
