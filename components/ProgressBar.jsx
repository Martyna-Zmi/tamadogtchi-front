const ProgressBar = ({ value, max, label }) => {
    return (
        <div className="py-1">
            <p className="text-lg font-bold pl-2 text-text-secondary">{label}</p>
            <div className="w-52 bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                    className="bg-violet-300 h-full transition-all hover:bg-violet-200"
                    style={{width: `${(value / max) * 100}%`}}
                ></div>
            </div>
        </div>

    );
};

export default ProgressBar;
