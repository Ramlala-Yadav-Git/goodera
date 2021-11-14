import { Jobs } from './components/jobs';
import { Navbar } from './components/navbar';
import { Search } from './components/search';
import styles from "./style/style.module.css"
import { useEffect, useState } from "react"
import axios from 'axios';
function App() {
  const [show, setShow] = useState([])

  useEffect(() => {
    getData()

  }, [])

  const handleSearch = (payload) => {
    getSearch(payload)
  }

  const getData = () => {
    axios.get(`https://goodera-server.herokuapp.com/jobs`).then((res) => {

      setShow([...res.data.jobs])
      console.log(res.data.jobs)
    })
  }
  const getSearch = (search) => {
    let location = search.select || undefined;
    let title = search.search || undefined;
    if (title) {

      axios.get(`https://goodera-server.herokuapp.com/jobs?title=${title}`).then((res) => {
        setShow([...res.data.jobs])
        console.log(res)
      })
    }
    else {
      axios.get(`https://goodera-server.herokuapp.com/jobs?location=${location}`).then((res) => {
        setShow([...res.data.jobs])
        console.log(res)
      })
    }
  }


  return (
    <div >
      <Navbar />
      <Search handleSearch={handleSearch} />
      <div className={styles.jobsContainer} >

        {
          show && show.map((el) => {
            return <Jobs key={el.id} img={el.image} title={el.title} description={el.description} />
          })
        }


      </div>
    </div>
  );
}

export default App;
