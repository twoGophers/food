     //Для добавление в базу данных оправленной формы
     let postData = async (url, data) => {
         let res = await fetch(url, {
             method: 'POST',
             headers: {
                 'Content-type': 'application/json'
             },
             body: data
         });

         return await res.json();
     };

    //Для получения из базы данных 
    let getResourse = async (url) => {
        let res = await fetch(url);

        //Для выявления ошибок при запросе
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status : ${res.status}`);
        }

        return await res.json();
    };

export {postData};
export {getResourse};