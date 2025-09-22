// let counter = 0;
// tidak pure sebagai component karena menggunakan variable di luar function

// solusinya dengan menambahkan id di props
const Row = ({id, text}) => {
    // dan menghapus variable diluar function
    // counter ++;
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    );
}

export default Row;