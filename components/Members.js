import data from "../generated/members.json";

const Member = ({ member }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2">
    <div className="bg-white  m-2">
      {member.characters.map((char) => (
        <img src={`https://www.bungie.net${char.emblemBackgroundPath}`} />
      ))}
      <div className="text-center">
        <h2 className="text-lg">{member.name}</h2>
      </div>
    </div>
  </div>
);

const Members = () => (
  <>
    <div className="flex flex-wrap">
      {data.map((member) => (
        <Member member={member} key={member.id} />
      ))}
    </div>
  </>
);

export default Members;
