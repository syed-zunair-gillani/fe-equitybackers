import { getCompleteURL } from '@/utils';
import React from 'react';

function Main({ data }) {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[550px]"
            style={{
                backgroundImage: `url(${getCompleteURL(data?.Banner_Image?.url)})`,
            }}
        >
            <div className="absolute inset-0 bg-[#001B36] opacity-90"></div>
            <div className="relative container mx-auto px-4 text-white flex items-end justify-start text-left min-h-[550px] pb-10">
                <div className="w-full md:max-w-[53%] pb-10">
                    <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight">
                        {data?.Title}
                    </h1>
                    <div className="mt-4 text-[18px] md:text-[20px] font-normal">
                        <div dangerouslySetInnerHTML={{ __html: data?.Excerpt }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
