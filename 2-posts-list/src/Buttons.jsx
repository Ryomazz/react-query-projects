function Buttons({ page, setPage }) {
   if (page === 1) {
      return <button onClick={() => setPage(page + 1)}>Next Page ➡️</button>;
   } else {
      return (
         <div>
            <button onClick={() => setPage(page - 1)}>Prevoius Page ⬅️</button>
            <button onClick={() => setPage(page + 1)}>Next Page ➡️</button>
         </div>
      );
   }
}

export default Buttons;
