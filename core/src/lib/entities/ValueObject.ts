interface ValueObjectProps {
    [index: string]: unknown;
}

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structural property.
 */
export default abstract class ValueObject<T extends ValueObjectProps> {
    public props: T;

    constructor(props: T) {
        const baseProps = {
            ...props,
        };

        this.props = baseProps;
    }

    public equals(other?: ValueObject<T>): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        if (other.props === undefined) {
            return false;
        }
        return JSON.stringify(this.props) === JSON.stringify(other.props);
    }
}