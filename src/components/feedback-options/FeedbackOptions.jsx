export default function ButtonFeedback({options, onLeaveFeedback}) {
 
    return (
      <div>
        {options.map(value => {
          return (
            <button
            key={value}
              type="button"
              style={{ height: '20px', width: '60px', marginRight: '10px' }}
              onClick={() => onLeaveFeedback(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
}
