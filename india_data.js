// Network visualization data
const nodes = new vis.DataSet([
  { id: 1, label: 'House I', group: 'house', fullLabel: 'First House', details: '<div class="tooltip-section"><div class="tooltip-header">Overview</div><div class="tooltip-content">Initial position</div></div>' },
  { id: 2, label: 'House II', group: 'house', fullLabel: 'Second House', details: '<div class="tooltip-section"><div class="tooltip-header">Overview</div><div class="tooltip-content">Resource sector</div></div>' },
  { id: 3, label: 'Planet A', group: 'planet', fullLabel: 'Celestial Body', details: '<div class="tooltip-section"><div class="tooltip-header">Details</div><div class="tooltip-content">Major influence</div></div>' },
  { id: 4, label: 'Planet B', group: 'planet', fullLabel: 'Celestial Body', details: '<div class="tooltip-section"><div class="tooltip-header">Details</div><div class="tooltip-content">Secondary influence</div></div>' }
]);

const edges = new vis.DataSet([
  { from: 1, to: 3, color: '#e74c3c' },
  { from: 2, to: 4, color: '#f39c12' }
]);
