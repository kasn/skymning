import data from "../generated/members.json";

const Member = ({ member }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2">
    <div className="bg-white rounded-lg p-2 m-2">
      {member.iconPath && (
        <img
          className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto rounded-full mx-auto"
          src={`https://www.bungie.net${member.iconPath}`}
        />
      )}
      <div className="text-center">
        <h2 className="text-lg">{member.name}</h2>
      </div>
    </div>
  </div>
);

const Members = () => (
  <>
    <h1>Members</h1>
    <div className="flex flex-wrap">
      {data.map((member) => (
        <Member member={member} key={member.id} />
      ))}
    </div>
  </>
);

export default Members;
