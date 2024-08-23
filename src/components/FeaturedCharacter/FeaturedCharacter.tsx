import { CharacterType } from "@/utils/types"

const FeaturedCharacter = ({name, job, bounty}:CharacterType) => {
  return (
    <div className="character-container__types">
      <div className="character-types">Name: {name}</div>
      <div className="character-types">Role: {job}</div>
      <div className="character-types">Bounty: {bounty}</div>
    </div>
  )
}

export default FeaturedCharacter