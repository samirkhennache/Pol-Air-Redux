import React from 'react'

const BlockIconForecast = (props) => {

    return (
        <div>
            <img src={`/img/${props.icon_forecast}.png`} alt="" />
        </div>
    )
}

export default BlockIconForecast