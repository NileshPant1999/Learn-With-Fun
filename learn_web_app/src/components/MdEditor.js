import React from 'react'
import MDEditor from '@uiw/react-md-editor';

function MdEditor() {
    const [value, setValue] = React.useState("**Hello world!!!**");

    const mdStr = 'Hello This Is Nilesh here'
    return (
        <div>
            <MDEditor
                value={value}
                onChange={setValue}
                height={400}
                width={300}
            />
            <MDEditor.Markdown source={value} />
        </div>
    )
}

export default MdEditor
