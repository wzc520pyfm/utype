
declare type System = import('typescript').System;
declare type CompilerOptions = import('typescript').CompilerOptions;
declare type TS = typeof import('typescript');
export interface VirtualTypeScriptEnvironment {
    sys: System;
    languageService: import('typescript').LanguageService;
    getSourceFile: (fileName: string) => import('typescript').SourceFile | undefined;
    createFile: (fileName: string, content: string) => void;
    updateFile: (fileName: string, content: string, replaceTextSpan?: import('typescript').TextSpan) => void;
}
/**
 * Makes a virtual copy of the TypeScript environment. This is the main API you want to be using with
 * typescript-vfs. A lot of the other exposed functions are used by this function to get set up.
 *
 * @param sys an object which conforms to the TS Sys (a shim over read/write access to the fs)
 * @param rootFiles a list of files which are considered inside the project
 * @param ts a copy pf the TypeScript module
 * @param compilerOptions the options for this compiler run
 */
export declare function createVirtualTypeScriptEnvironment(sys: System, rootFiles: string[], ts: TS, compilerOptions?: CompilerOptions): VirtualTypeScriptEnvironment;
/**
 * Grab the list of lib files for a particular target, will return a bit more than necessary (by including
 * the dom) but that's OK
 *
 * @param target The compiler settings target baseline
 * @param ts A copy of the TypeScript module
 */
export declare const knownLibFilesForCompilerOptions: (compilerOptions: import("typescript").CompilerOptions, ts: typeof import("typescript")) => string[];
/**
 * Sets up a Map with lib contents by grabbing the necessary files from
 * the local copy of typescript via the file system.
 */
export declare const createDefaultMapFromNodeModules: (compilerOptions: import("typescript").CompilerOptions) => Map<string, string>;
/**
 * Create a virtual FS Map with the lib files from a particular TypeScript
 * version based on the target, Always includes dom ATM.
 *
 * @param options The compiler target, which dictates the libs to set up
 * @param version the versions of TypeScript which are supported
 * @param cache should the values be stored in local storage
 * @param ts a copy of the typescript import
 * @param lzstring an optional copy of the lz-string import
 * @param fetcher an optional replacement for the global fetch function (tests mainly)
 * @param storer an optional replacement for the localStorage global (tests mainly)
 */
export declare const createDefaultMapFromCDN: (options: import("typescript").CompilerOptions, version: string, cache: boolean, ts: typeof import("typescript"), lzstring?: any | undefined, fetcher?: typeof fetch | undefined, storer?: Storage | undefined) => Promise<Map<string, string>>;
/**
 * Creates an in-memory System object which can be used in a TypeScript program, this
 * is what provides read/write aspects of the virtual fs
 */
export declare function createSystem(files: Map<string, string>): System;
/**
 * Creates an in-memory CompilerHost -which is essentially an extra wrapper to System
 * which works with TypeScript objects - returns both a compiler host, and a way to add new SourceFile
 * instances to the in-memory file system.
 */
export declare function createVirtualCompilerHost(sys: System, compilerOptions: CompilerOptions, ts: TS): {
    compilerHost: import("typescript").CompilerHost;
    updateFile: (sourceFile: import("typescript").SourceFile) => boolean;
};
/**
 * Creates an object which can host a language service against the virtual file-system
 */
export declare function createVirtualLanguageServiceHost(sys: System, rootFiles: string[], compilerOptions: CompilerOptions, ts: TS): {
    languageServiceHost: import("typescript").LanguageServiceHost;
    updateFile: (sourceFile: import("typescript").SourceFile) => void;
};
export {};
