import tkinter as tk
from tkinter import ttk
from tkinter import filedialog

def load_taskflow():
    print("Load TaskFlow button clicked")

def load_prompt():
    print("Load Prompt button clicked")

def upload_data_file():
    file_path = filedialog.askopenfilename()
    print(f"Data file uploaded: {file_path}")

def optimize_prompt():
    print("Optimize Prompt button clicked")

def visualize_agents():
    agent_hierarchy = "🤖 Main Agent\n    👾 Sub-Agent 1\n    👾 Sub-Agent 2\n        🤖 Sub-Sub-Agent 1"
    agent_text.insert(tk.END, agent_hierarchy)

def main():
    global agent_text  # To be used in visualize_agents function

    # Create the main window
    root = tk.Tk()
    root.title("Multi-Agent Autonomous AI System")
    root.configure(bg='#f0f0f0')

    # Set default font
    default_font = ('Arial', 12)

    # Agent Initialization Panel
    tk.Label(root, text="Agent Initialization", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=0, column=0, sticky=(tk.W, tk.N), pady=10)
    tk.Button(root, text="Load TaskFlow", command=load_taskflow, bg='#007BFF', fg='white', font=default_font, relief='ridge').grid(row=1, column=0, sticky=(tk.W, tk.N), padx=10)

    # Load Prompt
    tk.Button(root, text="Load Prompt", command=load_prompt, bg='#007BFF', fg='white', font=default_font, relief='ridge').grid(row=1, column=1, sticky=(tk.W, tk.N), padx=10)

    # Upload Data File
    tk.Button(root, text="Upload Data File", command=upload_data_file, bg='#007BFF', fg='white', font=default_font, relief='ridge').grid(row=2, column=0, sticky=(tk.W, tk.N), padx=10, pady=10)

    # API Keys Input
    tk.Label(root, text="API Keys", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=3, column=0, sticky=(tk.W, tk.N), pady=10)
    tk.Entry(root, font=default_font).grid(row=4, column=0, columnspan=2, sticky=(tk.W, tk.E), padx=10)

    # Write a Prompt
    tk.Label(root, text="Write a Prompt", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=0, column=3, sticky=(tk.W, tk.N), pady=10)
    tk.Entry(root, font=default_font).grid(row=1, column=3, columnspan=2, sticky=(tk.W, tk.E), padx=10)
    tk.Button(root, text="Prompt Optimizer", command=optimize_prompt, bg='#007BFF', fg='white', font=default_font, relief='ridge').grid(row=1, column=5, sticky=(tk.W, tk.N), padx=10)

    # Configuration Panel
    tk.Label(root, text="Configuration", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=5, column=0, sticky=(tk.W, tk.N), pady=10, padx=10)
    tk.Label(root, text="Temperature:", bg='#f0f0f0', font=default_font).grid(row=6, column=0, sticky=(tk.W, tk.N))
    tk.Scale(root, from_=0, to=1, orient=tk.HORIZONTAL, bg='#007BFF').grid(row=6, column=1)
    tk.Label(root, text="Model Type:", bg='#f0f0f0', font=default_font).grid(row=6, column=2, sticky=(tk.W, tk.N))
    ttk.Combobox(root, values=["Type1", "Type2"], font=default_font, width=15).grid(row=6, column=3)

    # Communication Panel
    tk.Label(root, text="Communication Panel", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=2, column=3, sticky=(tk.W, tk.N), pady=10)
    tk.Text(root, height=10, width=40, bg='white', font=default_font).grid(row=3, column=3, sticky=(tk.W, tk.N))

    # Task Monitoring Panel
    tk.Label(root, text="Task Monitoring Panel", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=2, column=4, sticky=(tk.W, tk.N), pady=10)
    tk.Text(root, height=10, width=40, bg='white', font=default_font).grid(row=3, column=4, sticky=(tk.W, tk.N))

    # Workspace Panel
    tk.Label(root, text="Workspace Panel", bg='#f0f0f0', font=('Arial', 14, 'bold')).grid(row=4, column=3, columnspan=2, sticky=(tk.W, tk.N), pady=10)
    tk.Text(root, height=10, width=85, bg='white', font=default_font).grid(row=5, column=3, columnspan=2, sticky=(tk.W, tk.N))

    # Visualize Agents
    tk.Button(root, text="Visualize Agents", command=visualize_agents, bg='#007BFF', fg='white', font=default_font, relief='ridge').grid(row=3, column=0, sticky=(tk.W, tk.N), padx=10, pady=10)
    agent_text = tk.Text(root, height=5, width=30, bg='white', font=default_font)
    agent_text.grid(row=4, column=0, columnspan=2, sticky=(tk.W, tk.N), padx=10)

    # Start the Tkinter event loop
    root.mainloop()

if __name__ == "__main__":
    main()
