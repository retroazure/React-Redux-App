import React, { useState } from "react";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const SearchForm = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChanges = (e) => {
        setSearchTerm(e.target.value);
    }

    const RenderLoader = () => {
        return(
            <>
            <Loader
            type="Puff"
            color="#00BFFF"
            height={12}
            width={14}
            timeout={3000} //3 secs
          />
          </>
        )
    }

    return(
        <form>
            <input type="text" onChange={handleChanges} value={searchTerm} />
            <button>{props.isLoading ? RenderLoader() : 'Search'}</button>
        </form>
    )
}

    const mapStateToProps = (state) => {
        return {
            isLoading: state.isLoading
        }
    }

export default connect(mapStateToProps, {})(SearchForm);