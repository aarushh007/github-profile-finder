import React, {useState, useEffect} from 'react';

const App = () => {
    const [name, setName] = useState('loading');
    const [img, setImg] = useState('blank');
    useEffect(()=>{
        fetch(`https://api.github.com/users/aarushh007`).then((res)=>res.json()).then((data)=>{setUser(data)})
    },[])
    const setUser = (data) => {
        setName(data.login);
        setImg(data.avatar_url);
    }
    const search = () => {
        let val = document.getElementById('name').value;
        fetch(`https://api.github.com/users/${val}`).then((res)=>res.json()).then((data)=>{setUser(data)})
        document.getElementById('name').value = '';
    }
    const page = `https://github.com/${name}`;
    return (
        <div>
            <h1>Search for GitHub users</h1>
            < br/>
            <h3>{name}</h3>
            <img src={img} alt='' width='100px'/>
            <br />
            <a href={page} target="_blank">GitHub Page</a>
            <br />
            <br />
            <input id='name' placeholder='search for users'/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default App;
