// eslint-disable-next-line import/no-anonymous-default-export
export  default (props) => (
    <div style={{margin: '1rem 0'}}>
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h3 style={{fontFamily: 'monospace'}}/>
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '1rem',
                padding: '0.5rem',
            }}>
            <strong>props</strong> = {' '}
                {JSON.stringify(props, null, 2)}
        </pre>
    </div>
)



