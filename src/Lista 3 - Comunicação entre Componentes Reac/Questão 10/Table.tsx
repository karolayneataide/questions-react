import { TabelItems, UsersProps } from "./Table.props";

interface TableProps {
  collums: string[];
}

export function Table({ users, collums }: UsersProps & TableProps) {
  return (
    <table>
      <thead>
        {collums.map((collum: string, index: number) => (
          <th key={index}>{collum}</th>
        ))}
      </thead>
      <tbody>
        {users.map((user: TabelItems) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.situation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// function App({users}:UsersProps) {
//   const
//   const filterdata = users.filter((user:TabelItems)=>
//   {
//     if(user.age > 30){
//       return(
//         user.age
//       )
//     }
//   }
//   )
//   return(
// <div>
//   <input type="text" />
// </div>
//   )
// }
