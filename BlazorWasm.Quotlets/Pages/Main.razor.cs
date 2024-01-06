using Microsoft.JSInterop;

namespace BlazorWasm.Quotlets.Pages
{
    public partial class Main
    {
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await LoadJavaScript();
            }
        }

        private async Task LoadJavaScript()
        {
            await Task.Delay(1000);
            await JsRuntime.InvokeVoidAsync("loadJs", "assets/js/switch.js");
            await JsRuntime.InvokeVoidAsync("loadJs", "assets/js/main.js");
        }
    }
}
