const getJwt = ()=>{
    return 'bearer ' + localStorage.getItem('fiolapedia-jwt-token');
}

