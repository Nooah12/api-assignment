'use client'
import FeaturedCharacter from '@/components/FeaturedCharacter/FeaturedCharacter';
import { CharacterType } from '@/utils/types';
import { useEffect, useState } from 'react';
import './character.scss'

const CharacterPage = () => {
    const [character, setCharacter] = useState<CharacterType | null>(null);

    const getData = async (): Promise<void> => {
        const randomId = Math.floor(Math.random() * 1000);
        const url = (`https://api.api-onepiece.com/v2/characters/en/${randomId}`);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCharacter({
                name: data.name,
                job: data.job,
                bounty: data.bounty
            });
        } catch (error) {
            console.error('Ops something went wrong');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className='character-section'>
          <div className='character-container'>
            <h2 className='character-container__title'>Characters</h2>
            {character && <FeaturedCharacter {...character} />}
            <button onClick={getData} className='character-container__button'>Click me!</button>
          </div>
        </section>
    );
};

export default CharacterPage;
