export default interface UseCase<Request, Response> {
    execute(e?: Request): Promise<Response> | Response;
}