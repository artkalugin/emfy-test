const Card = ({ name, id, price }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between gap-4">
                <h2 className="text-xl font-semibold">{ name }</h2>
                <span className="text-sm text-black/60">ID: { id }</span>
            </div>
            <p className="text-lg mt-6">Бюджет: { price } ₽</p>
        </div>
    );
}
 
export default Card;