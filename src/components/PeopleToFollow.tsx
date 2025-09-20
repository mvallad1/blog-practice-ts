import UserCard from "./UserCard"


const peopleToFollow = [
  { name: "Lebron James", following: false },
  { name: "Lionel Messi", following: true },
  { name: "Robert Pattinson", following: false },
  { name: "James Gunn", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">People to follow</h3>
    
      <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    
    </div>
  )
}

export default PeopleToFollow