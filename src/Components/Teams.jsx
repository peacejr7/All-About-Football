import Team from './Team'


const Teams = ({teams}) => {
    console.log(teams)
  return (
    <div>
    <h1 className='text-gray-900 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-center'>European Top Teams</h1>

<div className=' mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
      {
        teams.map(team => {
          return <Team key={team.id} team={team} />
        })
      }
    </div>
    </div>
     
            
    
    

  )
}

export default Teams
