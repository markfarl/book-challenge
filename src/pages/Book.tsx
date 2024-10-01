import { useParams } from "react-router-dom";

export default function Search(){
  let { userId } = useParams();

  return(
    <>
    <p>{userId}</p>
    </>
  )
}