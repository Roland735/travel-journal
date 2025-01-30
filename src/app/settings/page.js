const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <label>
                Temperature Units:
                <select>
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </select>
            </label>
        </div>
    );
};

export default Settings;
