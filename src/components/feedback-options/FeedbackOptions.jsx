export default function ButtonFeedback({options}) {
 
    return (
      <div>
        {options.map(({value, func}) => {
          return (
            // console.log(value, func)
            <button
            key={value}
              type="button"
              style={{ height: '20px', width: '60px', marginRight: '10px' }}
              onClick={() => func()}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
}
