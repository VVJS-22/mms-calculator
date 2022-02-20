import React from 'react';
import Head from 'next/head'


const MetaHead = ({title}) => {

    return (
        <Head>
        <title>MMS calculator | Jayesh Sugumaran</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    )
};

export default React.memo(MetaHead);