export default function Classes(...classes) {
    return classes.filter(Boolean).join(' ');
}