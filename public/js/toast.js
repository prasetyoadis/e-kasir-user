export function showToast(message, type = 'error') {
  Toastify({
    text: message,
    duration: 3000,
    gravity: 'top',
    position: 'right',
    style: {
        position: "fixed",
        padding: "12px 16px",
        borderRadius: "8px",
        marginBottom: "8px",
        fontSize: "14px",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        background:
            type === 'success'
                ? '#22c55e'
                : type === 'warning'
                ? '#f59e0b'
                : '#ef4444'
    }
  }).showToast();
}