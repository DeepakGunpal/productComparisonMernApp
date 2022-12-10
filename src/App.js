import './App.css';
import AddProduct from './component/addProduct/AddProduct';
import BasicTable from './component/table/Table';

function App() {
  return (
    <div className="App">
      <h1>Product Comparison</h1>
      <div className='comparison_table'>

        <div className='product_container'>
          <BasicTable />
        </div>

        <div className="product_container">
          <AddProduct />
        </div>

      </div>
    </div>
  );
}

export default App;
