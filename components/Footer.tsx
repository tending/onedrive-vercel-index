import Link from 'next/link'

import Vercel from './icons/Vercel'


export default function Footer () {
    return (
        <div className="flex items-center justify-center w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30">
            <span className="mr-1">Hosted with</span>
            <span className="mr-1" style={{color: '#e25555'}}>&hearts;</span>
            <span className="mr-1">by</span>
            <Link href="https://vercel.com/"><a className="opacity-80 hover:opacity-100" role="button" target="_blank"><Vercel /></a></Link>
        </div>
    )
}
