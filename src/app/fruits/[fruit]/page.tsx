'use client'

import { FruitType } from "@/utils/types";
import { useEffect, useState } from "react";
import '../fruits.scss'

const FruitPage = ({ params }: { params: { fruit: string } }) => {
    const { fruit } = params;
    const [filteredFruits, setFilteredFruits] = useState<FruitType[]>([]);
    const [selectedFruit, setSelectedFruit] = useState<FruitType | null>(null);

    const getFruits = async (): Promise<void> => {
        const url = (`https://api.api-onepiece.com/v2/fruits/en`);
        try {
            const response = await fetch(url);
            const data: FruitType[] = await response.json();

            // Filter fruits based on the type
            const filtered = data.filter((item: FruitType) => item.type.toLowerCase() === fruit);
            setFilteredFruits(filtered);
            console.log(filtered);
            
        } catch (error) {
            console.error('Oops, something went wrong');
        }
    };

    useEffect(() => {
        getFruits();
    }, [fruit]);

    const handleFruitClick = (fruit: FruitType) => {
        setSelectedFruit(fruit);
    };

    return (
        <div className='fruits-section'>
            <h1 className="fruits-section-title">{fruit}</h1>

            {/* Display details of selected fruit */}
            {selectedFruit && (
                <div className="fruits-section-details">
                    <h2>{selectedFruit.name}</h2>
                    {selectedFruit.filename && <img src={selectedFruit.filename} alt={selectedFruit.name} />}
                    <p><strong>Description:</strong> {selectedFruit.description}</p>
                    <p><strong>Type:</strong> {selectedFruit.type}</p>
                </div>
            )}
            
            {/* Display list of filtered fruits */}
            {filteredFruits && (
                <ul className="fruits-section-list">
                    {filteredFruits.map(item => (
                        <li key={item.name}>
                            <a href="#" onClick={() => handleFruitClick(item)}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FruitPage;

