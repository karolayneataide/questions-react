export function Message({ show }: { show: boolean }) {
  return (
    <div>
      <p>Bem vindo ao sistema da LogPlus</p>
      {show === true ? <p>Olá mundo!</p> : null}
    </div>
  );
}
