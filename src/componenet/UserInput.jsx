export default function UserInput({handleInputChange, data}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">INITIAL INVESTMENT</label>
                <input type="number" required value={data.initial} onChange={(e) => handleInputChange('initial', e.target.value)} />
            </p>
            <p >
                <label htmlFor="">ANNUAL INVESTMENT</label>
                <input type="number" required value={data.annual} onChange={(e) => handleInputChange('annual', e.target.value)}  />
            </p>
            <p>
                <label htmlFor="">EXPECTED RETURN </label>
                <input type="number" required value={data.expectedReturn} onChange={(e) => handleInputChange('expectedReturn', e.target.value)}  />
            </p>
            <p>
                <label htmlFor="">DURATION</label>
                <input type="number" required value={data.duration} onChange={(e) => handleInputChange('duration', e.target.value)}  />
            </p>
        </div>
    </section>
}