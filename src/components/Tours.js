import Cards from './Cards.js';

export default function Tours({tours, handleRemovetour}){
    return(
        <div className="container">
            <h2 className='title'> Travel Planner </h2>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                    return <Cards {...tour} handleRemovetour={handleRemovetour}></Cards>
                    })
                }
            </div>
        </div>
    );
}