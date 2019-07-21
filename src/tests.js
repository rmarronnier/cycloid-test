import ApiService from "@/api"

export function APITests(call = "") {

    

    switch (call) {

        case "getbreweries":

            console.log("Testing API call to get list of breweries :")
            return new Promise((resolve, reject) => {
                ApiService(call)
                    .then(resp => resp.json())
                    .then(breweries => {
                        console.log("http request successful")
                        if (breweries.length == 0) {
                            console.log("No results")
                        } else {
                            console.log(breweries[0])
                        }
                        resolve(breweries);
                    })
                    .catch(err => {
                        console.log("http request failed")
                        console.log(err)
                        reject(err)
                    })
            })

        case "getbrewerybyid":
            console.log("Testing API call to get details of a brewery :")
            return new Promise((resolve, reject) => {
                ApiService(call, Math.floor(Math.random() * 50))
                    .then(resp => resp.json())
                    .then(brewery => {
                        console.log("http request successful")
                        if (brewery.length == 0) {
                            console.log("No result")
                        } else {
                            console.log(brewery)
                        }
                        resolve(brewery)
                    })
                    .catch(err => {
                        console.log("http request failed")
                        console.log(err)
                        reject(err)
                    })
            })
    }

}

export default APITests;
