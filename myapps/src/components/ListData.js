const ListData = ({name, message,id, getData}) => {

    return(
        <> 
            <div className="card mt-2">
                <div className="card-header">
                    <div style={{fontSize:30}}><strong>{name}</strong></div>
                </div>
                <div className="card-body">
                    <div>{message}</div>
                </div>
                <div className="card-footer">
                    <div onClick={()=>getData(id)}> Click </div>
                </div>
            </div>
        </>
    )
}

export default ListData;