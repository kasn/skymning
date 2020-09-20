import data from "../generated/members.json";
import Hunter from "../svg/class_hunter.svg";
import Warlock from "../svg/class_warlock.svg";
import Titan from "../svg/class_titan.svg";
// class type
// Titan: 0
// Hunter: 1
// Warlock: 2
// Unknown: 3

const Member = ({ member }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 mb-2">
    <div className="bg-white  m-2">
      {member.characters.map((char) => (
        <div
          key={`${member.id}-${char.guardianClass}`}
          className="w-full flex items-center"
          style={{
            backgroundColor: `rgb(${char.emblemColor.red}, ${char.emblemColor.blue}, ${char.emblemColor.green})`,
            backgroundImage: `url(https://www.bungie.net${char.emblemBackgroundPath})`,
          }}
        >
          <img
            className="invisible"
            src={`https://www.bungie.net${char.emblemPath}`}
          />
          {char.guardianClass === 1 && (
            <>
              <Hunter fill="#FFF" />
              <h1 className="guardianClass pl-2">Hunter</h1>
            </>
          )}
          {char.guardianClass === 2 && (
            <>
              <Warlock fill="#FFF" />
              <h1 className="guardianClass pl-2">Warlock</h1>
            </>
          )}
          {char.guardianClass === 0 && (
            <>
              <Titan fill="#FFF" />
              <h1 className="guardianClass pl-2">Titan</h1>
            </>
          )}
        </div>
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
