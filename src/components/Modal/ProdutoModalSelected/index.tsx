import React, { useContext, useState } from "react";
import { Modal } from "..";
import { ModalContext } from "@/context/ModalContext";
import { useOrder } from "@/context/OrderContext";


function ProdutoModalSelected() {
    const { selectedProduto, closeModal } = useContext(ModalContext);
    const { addToOrder } = useOrder();

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddToCart = () => {
        if (!selectedProduto) return;
        if (selectedProduto.type === "Bolo") {
            if (!selectedSize || !selectedPrice) {
                alert("Por favor, selecione um tamanho antes de adicionar ao carrinho.");
                return;
            }
            addToOrder(selectedProduto, selectedSize, selectedPrice, quantity);
            console.log(addToOrder)
        } else {
            console.log(Array.isArray(selectedProduto.size) ? selectedProduto.size[0].value : null, quantity)
            addToOrder(selectedProduto, null, selectedProduto.size && Array.isArray(selectedProduto.size) ? selectedProduto.size[0].value : null, quantity);
        }
        closeModal();
    };

    // Counter para quantidade
    const renderCounter = () => (
        <div className="flex items-center gap-3 justify-center mt-2">
            <button
                className="w-8 h-8 rounded-full bg-primaryGreen text-white text-xl flex items-center justify-center hover:bg-primaryClay transition"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
            >-</button>
            <span className="text-lg font-bold text-gray-700 w-8 text-center">{quantity}</span>
            <button
                className="w-8 h-8 rounded-full bg-primaryGreen text-white text-xl flex items-center justify-center hover:bg-primaryClay transition"
                onClick={() => setQuantity(q => q + 1)}
                aria-label="Aumentar quantidade"
            >+</button>
        </div>
    );

    return (
        <Modal>
            <div className="flex flex-col gap-7 p-6 bg-primaryWhite/90 rounded-3xl shadow-2xl border border-primaryClay/30 mx-auto animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-7">
                    <img
                        className="rounded-full w-[120px] sm:w-[160px] lg:w-[200px] lg:h-[200px] shadow-lg border-4 border-primaryClay/30 bg-primaryYellow"
                        src={selectedProduto?.image}
                        alt={`${selectedProduto?.name} foto`}
                    />
                    <div className="flex flex-col gap-2 justify-center w-full max-w-xs">
                        <h2 className="delius-swash-caps-regular text-3xl text-primaryClay font-bold drop-shadow">{selectedProduto?.name}</h2>
                        <p className="montserrat-400 text-primaryClay/80 text-lg">{selectedProduto?.description}</p>
                    </div>
                </div>

                {selectedProduto?.type === "Bolo" && (
                    <>
                        <div className='bg-primaryPistachio/60 p-6 rounded-2xl flex flex-col sm:flex-row justify-center gap-4 shadow-md'>
                            {Array.isArray(selectedProduto?.size) &&
                                selectedProduto.size.map((opcao, index) => (
                                    <div
                                        key={index}
                                        className="border-primaryGreen border-2 p-4 rounded-xl bg-primaryWhite/80 flex-1 min-w-[180px] flex flex-col items-center"
                                    >
                                        <h1 className="font-bold text-primaryClay">
                                            {opcao.size.replace('P', 'Pequeno (4 pedaços)').replace('M', 'Médio (6 pedaços)').replace('G', 'Grande (8 pedaços)')}
                                        </h1>
                                        <div className="border-t w-1/2 mx-auto border-primaryGreen/40 mt-2"></div>
                                        <label className="mt-4 flex justify-between items-center border-transparent border cursor-pointer w-full">
                                            <span className="text-lg text-primaryClay" >{opcao.value}</span>
                                            <input
                                                type="radio"
                                                name="plan"
                                                className="form-radio text-primaryGreen focus:ring-primaryGreen"
                                                onClick={() => {
                                                    setSelectedSize(opcao.size)
                                                    setSelectedPrice(opcao.value)
                                                }}
                                            />
                                        </label>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="flex flex-col items-center gap-4 mt-2">
                            <button
                                className="bg-gradient-to-r from-primaryGreen via-primaryClay to-primaryYellow text-primaryWhite shadow-lg py-3 px-8 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 montserrat-600"
                                onClick={handleAddToCart}
                            >
                                🍰 Adicionar ao Carrinho
                            </button>
                        </div>
                    </>
                )}

                {selectedProduto?.type === "Cookie" && (
                    <>
                        <div className='mx-auto bg-primaryPistachio/60 p-6 rounded-2xl flex flex-col sm:flex-row justify-center gap-4 shadow-md'>
                            {Array.isArray(selectedProduto?.size) &&
                                selectedProduto.size.map((opcao, index) => (
                                    <div
                                        key={index}
                                        className="border-primaryGreen border-2 p-4 rounded-xl bg-primaryWhite/80 flex-1 min-w-[180px] flex flex-col items-center"
                                    >
                                        <h1 className="font-bold text-primaryClay">
                                            {opcao.size.replace('U', 'Tamanho Único')}
                                        </h1>
                                        <div className="border-t w-1/2 mx-auto border-primaryGreen/40 mt-2"></div>
                                        <span className="text-lg text-primaryClay">{opcao.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                        {renderCounter()}
                        <div className="flex flex-col items-center gap-4 mt-2">
                            <button
                                className="bg-gradient-to-r from-primaryGreen via-primaryClay to-primaryYellow text-primaryWhite shadow-lg py-3 px-8 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 montserrat-600"
                                onClick={handleAddToCart}
                            >
                                � Adicionar ao Carrinho
                            </button>
                        </div>
                    </>
                )}

                {selectedProduto?.type === "Cupcake" && (
                    <>
                        <div className='mx-auto bg-primaryPistachio/60 p-6 rounded-2xl flex flex-col sm:flex-row justify-center gap-4 shadow-md'>
                            {Array.isArray(selectedProduto?.size) &&
                                selectedProduto.size.map((opcao, index) => (
                                    <div
                                        key={index}
                                        className="border-primaryGreen border-2 p-4 rounded-xl bg-primaryWhite/80 flex-1 min-w-[180px] flex flex-col items-center"
                                    >
                                        <h1 className="font-bold text-primaryClay">
                                            {opcao.size.replace('U', 'Tamanho Único')}
                                        </h1>
                                        <div className="border-t w-1/2 mx-auto border-primaryGreen/40 mt-2"></div>
                                        <span className="text-lg text-primaryClay">{opcao.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                        {renderCounter()}
                        <div className="flex flex-col items-center gap-4 mt-2">
                            <button
                                className="bg-gradient-to-r from-primaryGreen via-primaryClay to-primaryYellow text-primaryWhite shadow-lg py-3 px-8 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 montserrat-600"
                                onClick={handleAddToCart}
                            >
                                🧁 Adicionar ao Carrinho
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
}

export default ProdutoModalSelected;
