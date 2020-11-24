import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 november to 30 november . 2 guest</p>
                <h1>Stays nearby</h1>

                <Button variant = "outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant = "outlined">
                    Type of place
                </Button>
                <Button variant = "outlined">
                    Price
                </Button>
                <Button variant = "outlined">
                    Rooms and Beds
                </Button>
                <Button variant = "outlined">
                    More filters
                </Button>

                <SearchResult
                    img = "https://wallpapercave.com/wp/wp6957233.jpg"
                    location = "Private in center of Canada"
                    title = "Stay at this peaceful house"
                    description = "These rooms have been recently refurbished and are fully ensuite."
                    star = {4.7}
                    price = "$30 / night"
                    total = "$117 total"
                    ></SearchResult>

                <SearchResult
                    img = "https://wallpapercave.com/wp/wp6957260.jpg"
                    location = "Private in center of Us"
                    title = "Stay at this peaceful house"
                    description = "These rooms have been recently refurbished and are fully ensuite."
                    star = {4.5}
                    price = "$20 / night"
                    total = "$100 total"
                    ></SearchResult>   

                <SearchResult
                    img = "https://wallpapercave.com/wp/wp6957272.jpg"
                    location = "Private in center of Dubai"
                    title = "Stay at this peaceful house"
                    description = "These rooms have been recently refurbished and are fully ensuite."
                    star = {4.5}
                    price = "$50 / night"
                    total = "$200 total"
                    ></SearchResult>      
                
            </div>
        </div>
    )
}

export default SearchPage
