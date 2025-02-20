import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CustomLoader from "../components/loader/CustomLoader";

function Description() {
 const [loading, setLoading] = useState(true);
 // used to go back to previous page
 const navigate = useNavigate();
 if (loading === true) {
  <div className="grid h-[80vh] place-items-center">
   <CustomLoader />
  </div>
 }
 return(
  <section className="container mx-auto p-4">
  <button className=" py-2 px-8 bg-gray-500 rounded-md font-medium mb-[3rem]" onClick={() => navigate(-1)}>Go Back</button>
  <div>
   <h1>Hello, welcome to muvie cinema</h1>
  </div>
  </section>
 );
}

export default Description;