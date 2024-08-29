import { CharacterType } from "@/utils/types"

const FeaturedCharacter = ({name, job, bounty}:CharacterType) => {
  return (
    <div className="character-container__types">
      <div className="character-container__detail">Name: {name}</div>
      <div className="character-container__detail">Role: {job ? job : 'This character has no role'}</div>
      <div className="character-container__detail">Bounty: {bounty ? bounty : 'There is no bounty!'}</div>
    </div>
  )
}

export default FeaturedCharacter