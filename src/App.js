import {
  Chart as ChartJS,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from "chart.js";
import PropTypes from 'prop-types'
import { Line } from "react-chartjs-2";
import './App.css';
import { connect } from 'react-redux';
import { requiretBooks } from './actions/action'
import React, { useState, useEffect } from 'react';

ChartJS.register(BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale);

/* const r = [{id: '06/05/2022', name: 'Pau'}, {id: '06/06/2022', name: 'Paulo'}, {id: '06/07/2022', name: 'Paulinha'}, {id: '06/08/2022', name: 'Pau'}, {id: '06/09/2022', name: 'Paulo'}]
const t = r.filter((i) => i.id > '06/06/2022')
console.log(t); */
function App({ book, apiReal }) {
  console.log(book);
  // eslint-disable-next-line no-unused-vars
  const [chartData, setData] = useState({
    labels: book.map((data) => data.date),
    datasets: [
      {
        label: "Mercado Bitcoim ",
        data: book.map((data) => Number(data.amount)),
        borderColor: "red",
        borderWidth: 1
      }
    ]
  });

  console.log(chartData);
  useEffect(() => {
    const repositorio = async () => {
      const resposta = await fetch('https://www.mercadobitcoin.net/api/BTC/trades/1501871369/1675743530/');
      const repositorios = await resposta.json();
      const arr = repositorios.filter((i) => i.tid > Number(740549));
      apiReal(arr);
    };
    repositorio();
  }, [apiReal]);


  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              }
            }
          }}
        />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  book: state.reducerFetch.books,
});

const mapDispatchToProps = (dispatch) => {
  return {
    apiReal: (payload) => {
      dispatch(requiretBooks(payload))
    }
  }
};

App.propTypes = {
  book: PropTypes.array.isRequired,
  apiReal: PropTypes.func,
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
