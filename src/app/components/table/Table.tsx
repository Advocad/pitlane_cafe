type Rows = {
  image: React.ReactNode;
  name: string;
  prise: number;
  quantity: number;
  total: number;
};

export const Table = ({ rows }: { rows: Array<Rows> }) => {
  if (!rows) {
    return null;
  }
  return (
    <table className="w-full">
      <thead className="">
        <tr className="font-semibolt text-left text-[18px] text-[#BFBFBF]">
          <th></th>
          <th>Товар</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Итого</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="border-tr border-t-[50px]">
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.image}</td>
            <td>{row.name}</td>
            <td>{row.prise}</td>
            <td>{row.quantity}</td>
            <td>{row.total}</td>
            <td>х</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
