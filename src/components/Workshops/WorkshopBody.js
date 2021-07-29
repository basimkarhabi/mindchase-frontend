import React,{useState ,useEffect }from "react";
import { makeStyles } from "@material-ui/core/styles";
//import useToken from '../useToken';
import Workshops from "../Workshops/Workshops";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  text:{
    color:' #1A3457',
    textAlign:'center',
    marginTop:10,
  },
  
}));

const WorkshopsBody = ({title}) => {
 // const { token} = useToken();
  const classes = useStyles();
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      // const response = await axios.get("http://localhost:3001/courses")
      const response = await axios.get(`${process.env.REACT_APP_API}/courses`)
      setCourses(response.data)
    }
    getCourses()
  }, [])

  return (
    <>
    <h1 className={classes.text}>start to chose workshops</h1>
   <Workshops 
          courses={courses}
          />       
    </>
  );
};

export default WorkshopsBody;
