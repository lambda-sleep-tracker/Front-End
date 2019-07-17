chartProps = {
    data: (PropTypes.object | PropTypes.func).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    legend: PropTypes.object,
    options: PropTypes.object,
    redraw: PropTypes.bool,
    getDatasetAtEvent: PropTypes.func,
    getElementAtEvent: PropTypes.func,
    getElementsAtEvent: PropTypes.func,
    onElementClick: PropTypes.func, // alias for getElementAtEvent(backwards compatible)
}
