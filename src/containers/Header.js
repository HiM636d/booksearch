                        //this component display the header containing input field,book search button,drop downs

import React ,{useState} from "react";
import {useSelector} from "react-redux";



const Header=(props) =>{
const books = useSelector((state)=>state);//assiging state

const handleKeyPress =(e)=>{// function to handle keypress on input and triggers fetchBooks on "Enter"
        if (e.key==='Enter'){props.fetchBooks('setBooks')};
        console.log(e.key)
      };


return(
<div style={{marginTop:"1%",marginBottom:"1%",backgroundImage: "url('/banner.jpg')"}}>
                                    <div style={{width:"100%",height:"100%",backgroundColor:"rgba(68,68,68,0.7"}}>
                                                    <div style={{marginBottom:"2%",paddingTop:"5%"}}>

                                                            < h1 className="ui header"  style={{color:"white"}}>Book Search</h1>
                                                    </div>

                                                    <div class="ui fluid action input" style={{width:"50%",margin:"auto",marginBottom:"2%"}} >
                                                            <input type="text" placeholder="Search..." onChange={(e) =>props.setTerm(e.target.value)}   onKeyDown={handleKeyPress}/>

                                                            <div className="ui button" onClick={()=>props.fetchBooks('setBooks')} >Search</div>
                                                    </div>
                                                    <div  style={{paddingBottom:"5%"}}> 
                                                        <div className="ui large label" style={{backgroundColor:"transparent",color:"white"}} > Choose Category</div>
                                                          
                                                            <select style={{width:"10%"}} onChange={(e)=>props.setCategory(e.target.value)}>
                                                            
                                                            <option className="item" data-value="">all</option>
                                                            <option className="item" data-value="Art">Art</option>
                                                            <option className="item" data-value="Biography">Biography</option>
                                                            <option className="item" data-value="Computers">Computers</option>
                                                            <option className="item" data-value="Medical">Medical</option>
                                                            <option className="item" data-value="Poetry">Poetry</option>
                                                            
                                                            </select>
                                                            
                                                            <div class="ui large label" style={{backgroundColor:"transparent",color:"white"}} > Order By</div>
                                                          
                                                          <select style={{width:"10%"}} onChange={(e)=>props.setOrderBy(e.target.value)}>
                                                          
                                                          <option className="item" data-value="relevance">Relevance</option>
                                                          <option className="item" data-value="newest">Newest</option>
                                                          
                                                          </select>
                                                        </div>
                                                        
                                                      
                               
                                    </div>
                                </div>);
};
                                export default Header;